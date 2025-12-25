import {coursesArray} from "../../arrays/Courses.ts";
import {Course} from "../course-component/Course.tsx";

export const Courses = () => {
    return (
        <div>
            {
                coursesArray.map((value, index) => <Course course={value} key={index}/>)
            }
        </div>
    );
};
