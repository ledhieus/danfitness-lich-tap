import { getCookie } from "../src/helper/cookie";

const API_DOMAIN = `${import.meta.env.VITE_PATH}`;

export const get = async (path, token = false) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    const tokenUser = getCookie("tokenUser");
    if (tokenUser) {
      headers.Authorization = `Bearer ${tokenUser}`;
    }
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "GET", // Mặc định là GET nhưng thêm vào cho rõ ràng
    headers: headers,
    credentials: "include", // Quan trọng! Để gửi cookie HTTP-Only
  });

  const result = await response.json();
  return result;
};

export const post = async (path, options, token = false) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) {
    const tokenUser = getCookie("tokenUser");
    if (tokenUser) {
      headers.Authorization = `Bearer ${tokenUser}`;
    }
  }
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};
