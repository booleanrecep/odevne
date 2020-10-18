import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TrDate from "tr-date";

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

const EditHomework = (props) => {
  const classes = useStyles();
  const { openIt, closeIt } = props;
  let [state, setState] = React.useState(props.editState);
  const { sinif, baslama, bitis, konu, odev } = props.editState;
  console.log(state);
  const handleChange = (event) => {
    event.preventDefault();
    event.persist();

    setState({
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("submitting");
  };

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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              margin="dense"
              value={baslama}
              name="baslama"
              label="Başlama Tarihi"
              type="date"
              inputProps={{
                min: "0000-10-13",
                max: "0000-12-31",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "10em" }}
            />
            <TextField
              onChange={(e) => handleChange(e)}
              margin="dense"
              name="bitis"
              value={bitis}
              label="Bitiş Tarihi"
              type="date"
              inputProps={{
                min: "0000-10-13",
                max: "0000-12-31",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "10em" }}
            />
            <TextField
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
          <Button onClick={handleSubmit} color="default">
            EKLE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditHomework;
