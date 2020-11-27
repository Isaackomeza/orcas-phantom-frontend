import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AdminPage from "Dashboard/";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("Tests for Users table", () => {
  describe("Test if users table is rendered", () => {
    it("<Users />", async () => {
      const wrapper = render(<AdminPage />);
      fireEvent.click(wrapper.getByText(/users/i));
      expect(wrapper.getByTestId("users-wrapper")).toBeValid();
    });
  });

  // describe("Tests for table sorting and selecting", () => {
  //   it(">>>> can select all rows and unselect them", async () => {
  //     const wrapper = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));

  //     await waitFor(() => {
  //       expect(wrapper.getByTestId("select-all-rows")).toBeValid();
  //       fireEvent.click(wrapper.getByTestId("select-all-rows"));

  //       expect(wrapper.getByTestId("select-all-rows")).toBeValid();
  //       fireEvent.click(wrapper.getByTestId("select-all-rows"));
  //     });
  //   });

  //   it(">>>> can sort rows by characters", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("sort-by-char")).toBeValid();
  //     fireEvent.click(getByTestId("sort-by-char"));
  //   });
  // });

  describe("Tests for table pagination", () => {
    it(">>>> can move to the next and last page", () => {
      const { getByTestId } = render(<AdminPage />);
      fireEvent.click(getByTestId("users-link"));
      expect(getByTestId("next-page-btn")).toBeValid();
      expect(getByTestId("last-page-btn")).toBeValid();

      fireEvent.click(getByTestId("next-page-btn"));
      fireEvent.click(getByTestId("last-page-btn"));
    });

    it(">>>> can move to the previous and first page", () => {
      const { getByTestId } = render(<AdminPage />);
      fireEvent.click(getByTestId("users-link"));
      expect(getByTestId("next-page-btn")).toBeValid();
      expect(getByTestId("last-page-btn")).toBeValid();

      fireEvent.click(getByTestId("next-page-btn"));
      fireEvent.click(getByTestId("last-page-btn"));

      expect(getByTestId("previous-page-btn")).toBeValid();
      expect(getByTestId("first-page-btn")).toBeValid();

      fireEvent.click(getByTestId("previous-page-btn"));
      fireEvent.click(getByTestId("first-page-btn"));
    });
  });

  // create route modal
  // describe("Tests for create user modal", () => {
  //   it(">>>> Can open create user modal correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("open-create-modal")).toBeValid();
  //     fireEvent.click(getByTestId("open-create-modal"));
  //   });

  //   it(">>>> Can open and cancel create user modal correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("open-create-modal")).toBeValid();
  //     fireEvent.click(getByTestId("open-create-modal"));

  //     expect(getByTestId("cancel-create-user-btn")).toBeValid();
  //     fireEvent.click(getByTestId("cancel-create-user-btn"));
  //   });

  //   it(">>>> Can open the create users modal correctly and NOT submit the form with empty fields", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("open-create-modal")).toBeValid();
  //     fireEvent.click(getByTestId("open-create-modal"));

  //     expect(getByTestId("create-user-btn")).toBeValid();
  //     fireEvent.click(getByTestId("create-user-btn"));

  //     expect(getByTestId("cancel-create-user-btn")).toBeValid();
  //   });

  //   // it(">>>> Can open and NOT create a user from the modal with same start location and destination", () => {
  //   //

  //   //   expect(getByTestId("open-create-modal")).toBeValid();
  //   //   fireEvent.click(getByTestId("open-create-modal"));

  //   //   fireEvent.change(getByTestId("route-code-create"), {
  //   //     target: { value: "Kimironko - Kacyiru" },
  //   //   });
  //   //   expect(getByTestId("route-code-create").value).toMatch(
  //   //     "Kimironko - Kacyiru"
  //   //   );

  //   //   fireEvent.change(getByTestId("route-length-create"), {
  //   //     target: { value: "8km" },
  //   //   });
  //   //   expect(getByTestId("route-length-create").value).toMatch("8km");

  //   //   fireEvent.change(getByTestId("assigned-buses-create"), {
  //   //     target: { value: 10 },
  //   //   });
  //   //   expect(getByTestId("assigned-buses-create").value).toMatch("10");

  //   //   fireEvent.change(getByTestId("start-loc-create"), {
  //   //     target: { value: 1.12 },
  //   //   });
  //   //   expect(getByTestId("start-loc-create").value).toMatch("1.12");

  //   //   fireEvent.change(getByTestId("dest-loc-create"), {
  //   //     target: { value: 1.12 },
  //   //   });
  //   //   expect(getByTestId("dest-loc-create").value).toMatch("1.12");

  //   //   fireEvent.change(getByTestId("add-bus-stp-cr"), {
  //   //     target: { value: "Camp Kigali" },
  //   //   });
  //   //   expect(getByTestId("add-bus-stp-cr").value).toMatch("Camp Kigali");

  //   //   fireEvent.click(getByTestId("create-user-btn"));

  //   //   expect(getByTestId("create-user-btn")).toBeValid();
  //   //   expect(getByTestId("cancel-create-user-btn")).toBeValid();
  //   //   fireEvent.click(getByTestId("cancel-create-user-btn"));
  //   // });

  //   it(">>>> Can open and create a user from the modal", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("open-create-modal")).toBeValid();
  //     fireEvent.click(getByTestId("open-create-modal"));

  //     fireEvent.change(getByTestId("user-name-create"), {
  //       target: { value: "Admin User" },
  //     });
  //     expect(getByTestId("user-name-create").value).toMatch("Admin User");

  //     fireEvent.change(getByTestId("user-email-create"), {
  //       target: { value: "adminuser@gmail.com" },
  //     });
  //     expect(getByTestId("user-email-create").value).toMatch(
  //       "adminuser@gmail.com"
  //     );

  //     fireEvent.change(getByTestId("user-password-create"), {
  //       target: { value: "samplepass" },
  //     });
  //     expect(getByTestId("user-password-create").value).toMatch("samplepass");

  //     fireEvent.change(getByTestId("user-role-create"), {
  //       target: { value: "admin" },
  //     });
  //     expect(getByTestId("user-role-create").value).toMatch("admin");

  //     fireEvent.change(getByTestId("user-role-create"), {
  //       target: { value: "bus" },
  //     });
  //     expect(getByTestId("user-role-create").value).toMatch("bus");

  //     fireEvent.change(getByTestId("add-bus-cr"), {
  //       target: { value: "RAD 345 C" },
  //     });
  //     expect(getByTestId("add-bus-cr").value).toMatch("RAD 345 C");

  //     expect(getByTestId("create-user-btn")).toBeValid();
  //     fireEvent.click(getByTestId("create-user-btn"));
  //   });
  // });

  // update route modal
  // describe("Tests for update user modal", () => {
  //   it(">>>> Can select a user and the edit button renders correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     expect(getByTestId("user-row")).toBeValid();
  //     fireEvent.click(getByTestId("user-row"));

  //     expect(getByTestId("open-update-modal")).toBeValid();
  //   });

  //   it(">>>> Can select a user, click on the edit button, and the update modal renders correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     fireEvent.click(getByTestId("user-row"));

  //     fireEvent.click(getByTestId("open-update-modal"));

  //     expect(getByTestId("update-user-btn")).toBeValid();
  //   });

  //   it(">>>> Can select a user, click on the edit button, and cancel the update modal correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     fireEvent.click(getByTestId("user-row"));

  //     fireEvent.click(getByTestId("open-update-modal"));

  //     expect(getByTestId("cancel-update-modal-btn")).toBeValid();
  //     fireEvent.click(getByTestId("cancel-update-modal-btn"));
  //   });

  //   // it(">>>> Cannot update a route to have the same start location and destination", () => {
  //   //

  //   //   fireEvent.click(getByTestId("user-row"));

  //   //   fireEvent.click(getByTestId("open-update-modal"));

  //   //   fireEvent.change(getByTestId("start-loc-update"), {
  //   //     target: { value: 6 },
  //   //   });
  //   //   expect(getByTestId("start-loc-update").value).toMatch("6");

  //   //   fireEvent.change(getByTestId("dest-loc-update"), {
  //   //     target: { value: 6 },
  //   //   });
  //   //   expect(getByTestId("dest-loc-update").value).toMatch("6");

  //   //   fireEvent.click(getByTestId("update-user-btn"));

  //   //   expect(getByTestId("update-user-btn")).toBeValid();
  //   // });

  //   it(">>>> Can update a user correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     fireEvent.click(getByTestId("user-row2"));

  //     fireEvent.click(getByTestId("open-update-modal"));

  //     fireEvent.change(getByTestId("user-name-update"), {
  //       target: { value: "Admin User2" },
  //     });
  //     expect(getByTestId("user-name-update").value).toMatch("Admin User2");

  //     fireEvent.change(getByTestId("user-email-update"), {
  //       target: { value: "adminuser2@gmail.com" },
  //     });
  //     expect(getByTestId("user-email-update").value).toMatch(
  //       "adminuser2@gmail.com"
  //     );

  //     fireEvent.change(getByTestId("user-role-update"), {
  //       target: { value: "admin" },
  //     });
  //     expect(getByTestId("user-role-update").value).toMatch("admin");

  //     fireEvent.change(getByTestId("user-role-update"), {
  //       target: { value: "bus" },
  //     });
  //     expect(getByTestId("user-role-update").value).toMatch("bus");

  //     // check if you can add inexisted bus
  //     fireEvent.change(getByTestId("add-bus-update"), {
  //       target: { value: "RAD 345 C" },
  //     });
  //     expect(getByTestId("add-bus-update").value).toMatch("RAD 345 0");

  //     fireEvent.click(getByTestId("update-user-btn"));
  //     expect(getByTestId("update-user-btn")).toBeValid();

  //     // check if you can add inexisted bus
  //     fireEvent.change(getByTestId("add-bus-update"), {
  //       target: { value: "RAD 345 C" },
  //     });
  //     expect(getByTestId("add-bus-update").value).toMatch("RAD 345 C");

  //     fireEvent.click(getByTestId("update-user-btn"));
  //   });
  // });

  // delete route
  // describe("Tests for deleting a user", () => {
  //   it(">>>> Can delete one user correctly", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     fireEvent.click(getByTestId("user-row2"));

  //     expect(getByTestId("delete-btn")).toBeValid();
  //     fireEvent.click(getByTestId("delete-btn"));
  //   });

  //   it(">>>> Cannot delete more than one user at the same time", () => {
  //     const { getByTestId } = render(<AdminPage />);
  //     fireEvent.click(getByTestId("users-link"));
  //     fireEvent.click(getByTestId("user-row"));
  //     fireEvent.click(getByTestId("user-row2"));

  //     expect(getByTestId("delete-btn")).toBeValid();
  //     fireEvent.click(getByTestId("delete-btn"));
  //   });
  // });
});
