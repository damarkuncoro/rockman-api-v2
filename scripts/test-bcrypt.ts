import bcrypt from "bcryptjs";

async function run() {
  const password = "rahasia1232";
  const hashed = await bcrypt.hash(password, 10);

  console.log("Password:", password);
  console.log("Hashed :", hashed);

  const isMatch = await bcrypt.compare(password, hashed);
  console.log("Password valid?", isMatch);
}

run();
