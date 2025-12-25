import type {FC} from "react";
import type ICourses from "../../models/ICourses.ts";

type PropType = {
    course: ICourses
}

export const Course:FC<PropType> = ({course}) => {
    return (
        <div>
            {course.title} {course.monthDuration}
        </div>
    );
};
