const Cart = require('../models/cartModel');
const cartController = require('../controllers/cartController');

jest.mock('../models/cartModel');

let req;
let res;
describe('Given a cartController', () => {
  describe('When createOne function is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };
    });
    describe('And Cart.create resolves', () => {
      test('Then res.json should been called', async () => {
        Cart.create.mockResolvedValue({ name: 'MakeUp' });
        await cartController.createOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Cart.create rejects', () => {
      test('Then res.status should been called with 500', async () => {
        Cart.create.mockRejectedValue();
        await cartController.createOne(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        Cart.create.mockRejectedValue(new Error('CREATE_ERROR'));
        await cartController.createOne(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('Given getOneById function', () => {
  beforeEach(() => {
    req = { params: { cartId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Cart.findById resolves', () => {
      test('Then res.json is called', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockResolvedValue()
        });

        await cartController.getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Cart.findById rejects', () => {
      test('Then res.status is called', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue()
        });

        await cartController.getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error('FIND_ERROR'))
        });

        await cartController.getOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given updateOneById function', () => {
  beforeEach(() => {
    req = { params: { cartId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Cart.findByIdAndUpdate resolves', () => {
      test('Then res.json is called', async () => {
        Cart.findByIdAndUpdate.mockReturnValue({
          populate: jest.fn().mockResolvedValue()
        });
        await cartController.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Cart.findByIdAndUpdate rejects', () => {
      test('Then res.status is called', async () => {
        Cart.findByIdAndUpdate.mockReturnValue({
          populate: jest.fn().mockRejectedValue()
        });

        await cartController.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Cart.findByIdAndUpdate.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error('FIND_ERROR'))
        });

        await cartController.updateOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given deleteOneById function', () => {
  beforeEach(() => {
    req = { params: { cartId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Cart.deleteById resolves', () => {
      test('Then res.status is called', async () => {
        Cart.findByIdAndDelete.mockResolvedValue();

        await cartController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
    });
    describe('And Cart.findByIdAndDelete rejects', () => {
      test('Then res.status is called', async () => {
        Cart.findByIdAndDelete.mockRejectedValue();

        await cartController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Cart.findByIdAndDelete.mockRejectedValue(new Error('FIND_ERROR'));

        await cartController.deleteOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});
