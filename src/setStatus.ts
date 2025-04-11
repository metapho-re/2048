import { statusElement } from "./queries";
import { Status } from "./types";

export const setStatus = (message: string, status: Status): void => {
  statusElement.innerHTML = message;

  switch (status) {
    case Status.Win: {
      statusElement.classList.add(Status.Win);
      break;
    }

    case Status.Lose: {
      statusElement.classList.add(Status.Lose);
      break;
    }

    default: {
      statusElement.classList.remove(Status.Win);
      statusElement.classList.remove(Status.Lose);
    }
  }
};
