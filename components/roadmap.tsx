export const Roadmap = () => {
  return (
    <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-xl font-bold text-feedback_title">Roadmap</h1>
        <a href="#" className="font-bold underline text-feedback_tag">
          View
        </a>
      </div>
      <div className="flex items-center justify-between">
        <ul className="list-disc flex flex-col justify-center items-start ml-[2.8rem] text-feedback_paragraph">
          <li className="marker:text-list_orange">
            <p>Planned</p>
          </li>
          <li className="marker:text-add_feedback_button">
            <p>In-Progress</p>
          </li>
          <li className="marker:text-list_cyan">
            <p>Live</p>
          </li>
        </ul>
        <div className="flex flex-col mr-[1.5rem] font-bold text-feedback_paragraph">
          <p>2</p>
          <p>3</p>
          <p>1</p>
        </div>
      </div>
    </div>
  );
};
