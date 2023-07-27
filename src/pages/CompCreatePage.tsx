import CompState from '../components/CreateComp/CompState';
import CompImageUpload from '../components/CreateComp/CompImageUpload';

const CompCreatePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CompState />
      <CompImageUpload />
    </div>
  );
};

export default CompCreatePage;
