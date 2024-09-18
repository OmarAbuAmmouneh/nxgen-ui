type Props = {
    onClick: () => void;
}
const TrashIcon = ({ onClick }: Props) => {
    return (
        <svg width="16"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
            height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9985 5.08593C13.9851 5.08593 13.9651 5.08593 13.9451 5.08593C10.4185 4.7326 6.89848 4.59927 3.41181 4.9526L2.05181 5.08593C1.77181 5.1126 1.52515 4.9126 1.49848 4.6326C1.47181 4.3526 1.67181 4.1126 1.94515 4.08593L3.30515 3.9526C6.85181 3.5926 10.4451 3.7326 14.0451 4.08593C14.3185 4.1126 14.5185 4.35927 14.4918 4.6326C14.4718 4.8926 14.2518 5.08593 13.9985 5.08593Z" fill="#EA4335" />
            <path d="M5.66846 4.41359C5.6418 4.41359 5.61513 4.41359 5.5818 4.40693C5.31513 4.36026 5.12846 4.10026 5.17513 3.83359L5.3218 2.96026C5.42846 2.32026 5.57513 1.43359 7.12846 1.43359H8.87513C10.4351 1.43359 10.5818 2.35359 10.6818 2.96693L10.8285 3.83359C10.8751 4.10693 10.6885 4.36693 10.4218 4.40693C10.1485 4.45359 9.88846 4.26693 9.84846 4.00026L9.7018 3.13359C9.60846 2.55359 9.58846 2.44026 8.8818 2.44026H7.13513C6.42846 2.44026 6.41513 2.53359 6.31513 3.12693L6.1618 3.99359C6.1218 4.24026 5.90846 4.41359 5.66846 4.41359Z" fill="#EA4335" />
            <path d="M10.1416 15.7653H5.86156C3.53489 15.7653 3.44156 14.4787 3.36823 13.4387L2.93489 6.72535C2.91489 6.45202 3.12823 6.21202 3.40156 6.19202C3.68156 6.17868 3.91489 6.38535 3.93489 6.65868L4.36823 13.372C4.44156 14.3853 4.46823 14.7653 5.86156 14.7653H10.1416C11.5416 14.7653 11.5682 14.3853 11.6349 13.372L12.0682 6.65868C12.0882 6.38535 12.3282 6.17868 12.6016 6.19202C12.8749 6.21202 13.0882 6.44535 13.0682 6.72535L12.6349 13.4387C12.5616 14.4787 12.4682 15.7653 10.1416 15.7653Z" fill="#EA4335" />
            <path d="M9.10672 12.0996H6.88672C6.61339 12.0996 6.38672 11.8729 6.38672 11.5996C6.38672 11.3263 6.61339 11.0996 6.88672 11.0996H9.10672C9.38005 11.0996 9.60672 11.3263 9.60672 11.5996C9.60672 11.8729 9.38005 12.0996 9.10672 12.0996Z" fill="#EA4335" />
            <path d="M9.66536 9.43359H6.33203C6.0587 9.43359 5.83203 9.20693 5.83203 8.93359C5.83203 8.66026 6.0587 8.43359 6.33203 8.43359H9.66536C9.9387 8.43359 10.1654 8.66026 10.1654 8.93359C10.1654 9.20693 9.9387 9.43359 9.66536 9.43359Z" fill="#EA4335" />
        </svg>
    )
}
export default TrashIcon;