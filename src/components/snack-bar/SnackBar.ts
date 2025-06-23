import Snackbar, { SnackBarOptions } from "react-native-snackbar"
import { SnackBarType } from "./snackBarType";
import { COLORS } from "../../theme";


function getSnackBarConfig(message: string,  type: SnackBarType): SnackBarOptions {
  const baseConfig = {
    text: message,
    numberOfLines: 4,
    duration: 3000,
  };

  if (type === SnackBarType.FAILURE) {
    return { ...baseConfig, backgroundColor: COLORS.red[500] };
  }
  if (type === SnackBarType.SUCCESS) {
    return { ...baseConfig, backgroundColor: COLORS.green[500] };
  }
  return baseConfig;
}


export function showSnackBar(message: string, type: SnackBarType){
    Snackbar.show(getSnackBarConfig(message, type))
}