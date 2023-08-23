import axios, { AxiosResponse } from 'axios';

export const BASE_URL: string = 'https://ryueclipse.shop/api';

function formatDateToMonthDay(isoDateString) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

export interface Competition {
  id: number;
  host_id: number | null;
  competition_period: string;
  recruit_period: string;
  competition_title: string;
  competition_content: string;
  scale: number;
  event: string;
  created_at: string;
  updated_at: string;
  qualification: string;
  prize: string;
  format: string;
  poster_path: string;
  pdf_path: string;
  final_date: string;
  dead_date: string;
  pre_date: string;
}

export interface MyCompetition extends Competition {
  grade: string;
}

export interface CompetitionResponse {
  result: Competition[];
}
export interface MyCompetitionResponse {
  result: MyCompetition[];
}
function adjustDateForMidnight(dateString: string): string {
  const [datePart, timePart] = dateString.split(' ');
  if (timePart === '24:00:00') {
    const [year, month, day] = datePart.split('.').map(Number);
    const adjustedDate = new Date(year, month - 1, day + 1); // month - 1는 JavaScript에서 월이 0부터 시작하기 때문
    return adjustedDate.toISOString().split('T')[0];
  }
  return dateString;
}

function formatCompetitionPeriod(period: string): string {
  if (!period) return '';

  const [startDate, endDate] = period.split(',');

  const adjustedStartDate = adjustDateForMidnight(startDate);
  const adjustedEndDate = adjustDateForMidnight(endDate);

  const start = new Date(adjustedStartDate)
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .replace(/\./g, '-');
  const end = new Date(adjustedEndDate)
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .replace(/\./g, '-');

  return `${start} ~ ${end.split('-')[2]}`;
}
function formatRecruitPeriod(period: string): string {
  if (!period) return '';

  const [startDate, endDate] = period.split(',');

  const start = new Date(startDate)
    .toISOString()
    .split('T')[0]
    .replace(/-/g, '.');
  const startTime = new Date(startDate)
    .toTimeString()
    .split(' ')[0]
    .slice(0, 5);

  const end = new Date(endDate).toISOString().split('T')[0].replace(/-/g, '.');
  const endTime = new Date(endDate).toTimeString().split(' ')[0].slice(0, 5);

  return `${start}-${startTime} ~ ${end}-${endTime}`;
}

export async function getCompetition(): Promise<Competition[]> {
  try {
    const response: AxiosResponse<CompetitionResponse> = await axios.get(
      `${BASE_URL}/competition`,
    );
    console.log('COMPETITION ', response.data.result);
    return response.data.result.map((comp) => ({
      ...comp,
      competition_period: formatCompetitionPeriod(comp.competition_period),
      recruit_period: formatRecruitPeriod(comp.recruit_period),
      created_at: formatDateToMonthDay(comp.created_at),
      updated_at: formatDateToMonthDay(comp.updated_at),
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCompetitionById(
  token: string,
): Promise<MyCompetition[]> {
  try {
    const response: AxiosResponse<MyCompetitionResponse> = await axios.get(
      `${BASE_URL}/user/playList?token=${token}`,
    );
    console.log('BYID ', response);
    return response.data.result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getHostCompetitionById(
  token: number,
): Promise<MyCompetition[]> {
  try {
    const response: AxiosResponse<MyCompetitionResponse> = await axios.get(
      `${BASE_URL}/user/playList?token=${token}`,
    );
    console.log('BYHost ', response);
    return response.data.result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getCurrentStatus(recruit_period: string): string {
  if (!recruit_period) {
    return '모집기간 미정';
  }
  const [start, end] = recruit_period.split(' ~ ');

  const startDate = new Date(start.split('-')[0]);
  const endDate = new Date(end.split('-')[0]);

  const currentDate = new Date();

  if (currentDate < startDate) {
    return '모집전';
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return '모집중';
  } else {
    return '모집마감';
  }
}
