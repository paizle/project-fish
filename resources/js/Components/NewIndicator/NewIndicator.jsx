import './NewIndicator.scss'

export default function NewIndicator({ text = 'new', children }) {
    return (
        <div className="NewIndicator">
            {children}
            <div className="text-content">{text}</div>
        </div>
    )
}
