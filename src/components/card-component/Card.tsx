import type {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export const Card:FC<Props> = ({children}) => {
    return (
        <div style={{ border: '2px solid gold', padding: '20px', margin: '10px' }}>
            {children}
        </div>
    );
};
