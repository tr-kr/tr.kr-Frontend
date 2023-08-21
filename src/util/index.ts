import axios, { AxiosResponse } from 'axios';

export const BASE_URL: string = 'http://3.34.170.230/api';

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
  competition_title: string;
  competition_content: string;
  event: string;
  created_at: string;
  updated_at: string;
  dead_date: string;
  qualification: string;
  prize: string;
  pre_date: string;
  final_date: string;
  poster_path: string;
  pdf_path: string;
}

export interface CompetitionResponse {
  result: Competition[];
}

export async function getCompetition(): Promise<Competition[]> {
  try {
    const response: AxiosResponse<CompetitionResponse> = await axios.get(
      `${BASE_URL}/competition`,
    );

    const formattedData = response.data.result.map((comp) => ({
      ...comp,
      created_at: formatDateToMonthDay(comp.created_at),
      updated_at: formatDateToMonthDay(comp.updated_at),
      dead_date: formatDateToMonthDay(comp.dead_date),
    }));

    return formattedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
