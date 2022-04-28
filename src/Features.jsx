import React from "react";
import FeatureItem from "./FeatureItem";
import todo from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";

const Features = () => {
    const todoText = "Todo List";

    const calText = "Calendar";

    const remindersText = "Reminders";

    const planningText = "Planning";

    return (
        <ul>
            <FeatureItem icon={todo} text={todoText} altIcon={todoText} />
            <FeatureItem icon={calendar} text={calText} altIcon={calText} />
            <FeatureItem
                icon={reminders}
                text={remindersText}
                altIcon={remindersText}
            />
            <FeatureItem
                icon={planning}
                text={planningText}
                altIcon={planningText}
            />
        </ul>
    );
};

export default Features;
