import Alert from 'react-bootstrap/Alert';

const Message = ({ variant, children }) => {
	// variant can be info, success, etc.
	return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
	variant: 'info',
};

export default Message;
