const validatePlate = (
  plate: string
): { valid: true } | { valid: false; reason: string } => {
  if (plate.length > 6)
    return { valid: false, reason: "Bílnúmer er að hámarki 6 stafir" };
  if (plate.length < 2)
    return { valid: false, reason: "Bílnúmer er að lágmarki 2 stafir" };

  const valid = /^[AÁBCDÐEÉFGHIÍJKLMNOÓPQRSTUÚVWXYÝZÞÆÖ0-9]+$/.test(
    plate.toUpperCase()
  );

  if (!valid)
    return {
      valid: false,
      reason: "Bílnúmer má einungis innihalda íslenska bókstafi og tölustafi",
    };

  return { valid: true };
};
