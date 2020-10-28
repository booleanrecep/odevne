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
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
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
    this.popcreated = props.handlePopcreated;
    // this.checked = props.checked;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const bs = this.state.baslama;
    const bt = this.state.bitis;
    this.state.baslama = `${bs.substring(8, 10)}.${bs.substring(
      5,
      7
    )}.${bs.substring(0, 4)}`;
    this.state.bitis = `${bt.substring(8, 10)}.${bt.substring(
      5,
      7
    )}.${bt.substring(0, 4)}`;
    this.newState.map((cls) => {
      cls.classroom === this.state.sinif
        ? (cls.homeworks.unshift(this.state), this.popcreated())
        : null;
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
    this.setState({
      id: newId,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { openIt, closeIt, classes } = this.props;
    const { sinif, baslama, bitis, konu, odev } = this.state;
    // console.log(this.checked)
    // console.log(this.newState)
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
                <MenuItem value={""}>
                  {" "}
                  <span>&#127809;</span>{" "}
                </MenuItem>
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
                  min: `${new Date().toISOString().substring(0, 10)}`,
                  max: `${new Date(new Date().setDate(new Date().getDate() + 7))
                    .toISOString()
                    .substring(0, 10)}`,
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
                  min: `${new Date().toISOString().substring(0, 10)}`,
                  max: `${new Date(
                    new Date().setDate(new Date().getDate() + 14)
                  )
                    .toISOString()
                    .substring(0, 10)}`,
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

// CreateHomework.propTypes = {
//   sinif: PropTypes.string.isRequired,
//   baslama: PropTypes.string.isRequired,
//   bitis:PropTypes.string.isRequired,
//   konu:PropTypes.string.isRequired,
//   odev:PropTypes.string.isRequired,
// };
export default withStyles(styles)(CreateHomework);
