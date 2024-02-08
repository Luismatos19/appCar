export async function deleteCar(license: string) {
  const url = `http://localhost:3000/api/cars/license?license=${license}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    return { success: false, message: error.message };
  }
}

export async function createCar(data: ICar) {
  try {
    const response = await fetch("/api/cars/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error creating car:", error);
  }
}

export async function getScore(data) {
  try {
    const response = await fetch("/api/finance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return "Algo deu errado, por vaor tente novamente";
  }
}
