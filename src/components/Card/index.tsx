import "./style.css";

interface CardProps {
    title: string;
    items: { [key: string]: string };
}

export function Card({ ...props }: CardProps) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <hr />
            <ul>
                {Object.entries(props.items).map(([key, value], index) => (
                    <li key={index} className="skill-item">
                        <strong>{key}</strong>: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
