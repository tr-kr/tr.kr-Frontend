import CompState from '../components/CreateComp/CompState';
import CompImageUpload from '../components/CreateComp/CompImageUpload';
import CompSetting from '../components/CreateComp/CompSetting';

const CompCreatePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CompState />
      <CompImageUpload />
      <CompSetting />
    </div>
  );
};

export default CompCreatePage;
