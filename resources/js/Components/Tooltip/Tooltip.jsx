import './Tooltip.scss';

export default function Tooltip({ children, note }) {
    function showPopover(event) {
        const target = event.currentTarget;
        const popover = target.querySelector('[popover]');
        const rect = target.getBoundingClientRect();

        popover.style.top = rect.top + 20 + 'px';
        popover.style.left = rect.left + 'px';
        popover.showPopover();
    }

    function hidePopover(event) {
        const target = event.currentTarget;
        const popover = target.querySelector('[popover]');
        popover.hidePopover();
    }

    return (
        <div
            className="Tooltip"
            onMouseEnter={(e) => showPopover(e)}
            onMouseLeave={(e) => hidePopover(e)}
        >
            {children}
            <span popover="true">{note}</span>
        </div>
    );
}
