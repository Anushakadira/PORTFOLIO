const ProgressBar = ({ progress }: {progress: number}) => {
  return(
    <div className="bg-gray-900/50 w-[400px] rounded-sm h-3">
      <div
          className="bg-green-500 h-3 rounded-sm"
          style={{ width: `${progress}%` }}
      ></div>
    </div>
 );
};
export default ProgressBar;