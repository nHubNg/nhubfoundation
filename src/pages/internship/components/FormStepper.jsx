const FormStepper = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex items-center justify-center space-x-8 mt-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`z-10 relative flex items-center justify-center ${
            index === currentStep
              ? 'bg-orange text-white transition-colors duration-500'
              : 'bg-white text-gray-600'
          } rounded-full w-10 h-10 border`}
        >
          <span className="text-sm">{index + 1}</span>
        </div>
      ))}
      <div
        className={`block w-36 h-1 bg-[gray] absolute z-1`}
      ></div>
    </div>
  );
};

export default FormStepper;
