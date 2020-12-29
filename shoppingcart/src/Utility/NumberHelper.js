export function NumberFormat(number) {
  let format = "vi-VN";
  let style = "currency";
  let currency = "VND";
  return new Intl.NumberFormat(format, {
    style: style,
    currency: currency,
  }).format(number);
}
