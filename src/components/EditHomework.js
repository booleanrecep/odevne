import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  konu: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
  odev: {
    width: "16.5em",
    [theme.breakpoints.up("sm")]: {
      width: "25em",
    },
  },
}));

const EditHomework = ({
  openIt,
  closeIt,
  editState,
  handleChangeEdit,
  handleSubmitEdit,
}) => {
  const classes = useStyles();

  const { sinif, baslama, bitis, konu, odev } = editState;

  return (
    <div>
      <Dialog
        open={openIt}
        onClose={closeIt}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Yeni Ödev</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Yeni bir ödev oluşturmak için lütfen aşağıdaki alanları doldurunuz.
          </DialogContentText>
          <FormControl>
            <InputLabel>Sınıf</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              value={sinif}
              onChange={handleChangeEdit}
              autoWidth
              inputProps={{
                name: "sinif",
              }}
              style={{
                width: "5em",
              }}
            >
              <MenuItem value={sinif}>{sinif}</MenuItem>
            </Select>

            <TextField
              onChange={handleChangeEdit}
              margin="dense"
              value={baslama}
              name="baslama"
              label="Başlama Tarihi"
              type="date"
              inputProps={{
                min: `${new Date().toISOString().substring(0, 10)}`,
                max: new Date(new Date().setDate(new Date().getDate() + 7))
                  .toISOString()
                  .substring(0, 10),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "10em" }}
            />
            <TextField
              onChange={handleChangeEdit}
              margin="dense"
              name="bitis"
              value={bitis}
              label="Bitiş Tarihi"
              type="date"
              inputProps={{
                min: `${new Date().toISOString().substring(0, 10)}`,
                max: new Date(new Date().setDate(new Date().getDate() + 14))
                  .toISOString()
                  .substring(0, 10),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "10em" }}
            />
            <TextField
              onChange={handleChangeEdit}
              value={konu}
              margin="dense"
              name="konu"
              label="Konu"
              type="text"
              inputProps={{
                maxLength: "25",
              }}
              className={classes.konu}
            />
            <TextField
              onChange={handleChangeEdit}
              value={odev}
              margin="dense"
              name="odev"
              label="Ödev Açıklaması"
              type="text"
              multiline
              inputProps={{
                maxLength: "150",
              }}
              className={classes.odev}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeIt} color="secondary">
            İPTAL
          </Button>
          <Button onClick={handleSubmitEdit} color="default">
            EKLE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditHomework;
