import {coursesAndDurationArray} from "../../arrays/coursesAndDurationArray.ts";
import {Course} from "../course-component/Course.tsx";

export const Courses = () => {
    return (
        <div>
            {
                coursesAndDurationArray.map((value, index) => <Course course={value} key={index}/>)
            }
        </div>
    );
};
