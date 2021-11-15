import { FC } from 'react';

const CreateProjectAction: FC = () => (
  <div className="fixed bottom-0 z-10 p-3 border-top border-2 bg-white w-full border-gray-50 shadow-md">
    <div className="max-w-lg mx-auto grid grid-cols-2 gap-4 text-center">
      <button type="button" className="text-sm text-blue-500">
        Simpan sebagai draft
      </button>
      <button type="button" className="text-sm bg-blue-500 rounded-md p-2 shadow-lg text-white">
        Publikasikan
      </button>
    </div>
  </div>
);

export default CreateProjectAction;
