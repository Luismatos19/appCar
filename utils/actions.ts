type DeleteCarResponse = {
  success: boolean;
  message?: string;
  data?: any;
};

export async function deleteCar(license: string): Promise<DeleteCarResponse> {
  const url = `http://localhost:3000/api/cars/license?license=${license}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}

type CreateCarResponse = {
  success: boolean;
  message?: string;
};

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
    return { success: false, message: "Something went wrong" };
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
