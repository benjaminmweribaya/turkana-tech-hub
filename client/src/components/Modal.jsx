import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {/* Modal Header */}
      <DialogTitle className="flex justify-between items-center bg-blue-600 text-white">
        {title}
        <IconButton onClick={onClose} className="text-white">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent className="p-4">{children}</DialogContent>

      {/* Modal Footer */}
      <DialogActions className="p-4">
        <Button onClick={onClose} className="text-blue-600">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
