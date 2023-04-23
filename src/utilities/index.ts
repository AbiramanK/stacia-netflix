import { VariantType, enqueueSnackbar } from "notistack";

function shuffleArray(array: Array<any>) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function notify(message: string, variant?: VariantType) {
  enqueueSnackbar(message, {
    variant,
  });
}

export { shuffleArray, notify };
