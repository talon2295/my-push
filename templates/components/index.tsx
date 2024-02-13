import React from "react" ;

type Props = {
	className?: string;
};

export default function ##COMPONENT_NAME##({ children, className }: Props) {
    //Add here some status
    
	return (
        <div className={`${className || ""}`}>
            {/* Add here your JSX*/}
        </div>
    );
}
