const Feature = ({ id, title, text }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center gap-6 md:gap-9 lg:gap-14 text-center md:text-left lg:text-center">
      <div className="flex items-center justify-center border border-davy-grey w-12 lg:w-14 h-12 lg:h-14 rounded-full font-fraunces font-semibold text-xl">
        {id}
      </div>
      <div className="space-y-4 lg:space-y-7 max-w-[486px]">
        <h3 className="h3 text-dark-purple">{title}</h3>
        <p className="body text-davy-grey">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
