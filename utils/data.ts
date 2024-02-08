export async function getCars() {
  const url = "/api/cars";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fail to search cars");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    return { success: false, message: error.message };
  }
}

export async function getCarById(license: string) {
  const url = `http://localhost:3000/api/cars/license?license=${license}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fail to search cars");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    return { success: false, message: error.message };
  }
}
