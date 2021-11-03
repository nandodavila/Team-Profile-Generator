const Manager = require("../lib/manager");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a email, phone number, employee ID and role with their phone number", () => {
      const obj = new Manager('Jared', '3', 'test@email.com', '1234567890');

      expect(obj.name).toEqual('Jared');
      expect(obj.id).toEqual('3');
      expect(obj.email).toEqual('test@email.com');
      expect(obj.phone).toEqual('1234567890');
    });
  })
});