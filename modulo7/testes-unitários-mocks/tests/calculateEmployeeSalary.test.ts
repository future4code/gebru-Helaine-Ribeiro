import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary";

describe("Test.skipando calculateEmployeeSalary", () => {
  test.skip("Input com atributo faltando", () => {
    expect.assertions(1);
    try {
      const validatorMock = jest.fn(() => {
        return {
          isValid: false,
          errors: [],
        };
      });

      const input = {
        employeeName: "",
        baseSalary: 1000,
        benefits: [10],
        extraHours: 2,
      };

      calculateEmployeeSalary(input, validatorMock);
    } catch (error: any) {
      expect(error.message).toBe("Missing Properties");
    }
  });

  test.skip("Horas extras negativas", () => {
    expect.assertions(1);
    try {
      const validatorMock = jest.fn(() => {
        return {
          isValid: true,
          errors: [],
        };
      });

      const input = {
        employeeName: "rodrigo",
        baseSalary: 1000,
        benefits: [10],
        extraHours: -2,
      };

      calculateEmployeeSalary(input, validatorMock);
    } catch (error: any) {
      expect(error.message).toBe("Invalid ExtraHours");
    }
  });

  test("Cálculo correto do salário", () => {
    expect.assertions(7);
    try {
      const validatorMock = jest.fn(() => {
        return {
          isValid: true,
          errors: [],
        };
      });

      const input = {
        employeeName: "rodrigo",
        baseSalary: 1000,
        benefits: [10, 20, 30],
        extraHours: 1,
      };

      const output = calculateEmployeeSalary(input, validatorMock);
      expect(output).toBeDefined();
      expect(validatorMock).toBeCalled();
      expect(validatorMock).toBeCalledWith(input);
      expect(validatorMock).toBeCalledTimes(1);
      expect(validatorMock).toReturn();
      expect(validatorMock).toReturnWith({
        isValid: true,
        errors: [],
      });
     
      expect(output).toBe(1062);
     
    } catch (error: any) {}
  });
});
