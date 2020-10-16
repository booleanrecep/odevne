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
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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
});
class CreateHomework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sinif: "",
      baslama: "",
      bitis: "",
      konu: "",
      odev: "",
    };
    this.newState = props.homeworkState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.close = props.closeIt;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.newState.map((cls) => {
      cls.classroom === this.state.sinif ? cls.homework.push(this.state) : null;
    });
    this.setState({
      id: "",
      sinif: "",
      baslama: "",
      bitis: "",
      konu: "",
      odev: "",
    });
    this.close();
  };
  handleChange = (event) => {
    event.preventDefault();
    event.persist();
    const newId = Math.floor(Math.random() * 10 ** 5);
    return this.setState({
      id: newId,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { openIt, closeIt } = this.props;
    const { classes } = this.props;
    const { sinif, baslama, bitis, konu, odev } = this.state;
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
              Yeni bir ödev oluşturmak için lütfen aşağıdaki alanları
              doldurunuz.
            </DialogContentText>
            <FormControl>
              <InputLabel>Sınıf</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                value={sinif}
                onChange={this.handleChange}
                autoWidth
                inputProps={{
                  name: "sinif",
                }}
                style={{
                  width: "5em",
                }}
              >
                <MenuItem value={"5-A"}>5/A</MenuItem>
                <MenuItem value={"5-B"}>5/B</MenuItem>
                <MenuItem value={"6-B"}>6/B</MenuItem>
                <MenuItem value={"8-A"}>8/A</MenuItem>
              </Select>

              <TextField
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
            <Button onClick={this.handleSubmit} color="default">
              EKLE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateHomework);
