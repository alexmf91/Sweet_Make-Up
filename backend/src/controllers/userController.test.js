const jwt = require('jsonwebtoken');
const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');
jest.mock('jsonwebtoken');

let req;
let res;

describe('Given getOneById function', () => {
  beforeEach(() => {
    req = { params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And User.findById resolves', () => {
      test('Then res.json is called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([])
          })
        });

        await userController.getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findById rejects', () => {
      test('Then res.status is called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockRejectedValue([])
          })
        });

        await userController.getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockRejectedValue(new Error('FIND_ERROR'))
          })
        });

        await userController.getOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given updateOneById function', () => {
  beforeEach(() => {
    req = { params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And User.findByIdAndUpdate resolves', () => {
      test('Then res.json is called', async () => {
        User.findByIdAndUpdate.mockResolvedValue();

        await userController.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findById rejects', () => {
      test('Then res.status is called', async () => {
        User.findByIdAndUpdate.mockRejectedValue();

        await userController.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        User.findByIdAndUpdate.mockRejectedValue(new Error('FIND_ERROR'));

        await userController.updateOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given deleteOneById function', () => {
  beforeEach(() => {
    req = { params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And User.findByIdAndDelete resolves', () => {
      test('Then res.json is called', async () => {
        User.findByIdAndDelete.mockResolvedValue();

        await userController.deleteOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findById rejects', () => {
      test('Then res.status is called', async () => {
        User.findByIdAndDelete.mockRejectedValue();

        await userController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('FIND_ERROR'));

        await userController.deleteOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given signUp function', () => {
  describe('When is invoked', () => {
    test('Then res.send is called', () => {
      req = { user: null };
      res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
      userController.signUp(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given login function', () => {
  describe('When is invoked', () => {
    describe('And it resolves', () => {
      test('Then res.json is called', () => {
        req = { user: { _id: null, email: null } };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        jwt.sign.mockReturnValue();

        userController.logIn(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a tokenRefresh function', () => {
  describe('When there is not refresh token', () => {
    test('Then res.sendStatus should been called', () => {
      req = { body: { refreshToken: false } };
      res = { json: jest.fn(), status: jest.fn(), sendStatus: jest.fn() };

      userController.tokenRefresh(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(401);
    });
  });
  describe('When refreshtokens dont inlcude refreshtoken', () => {
    test('Then res.sendStatus should been called', () => {
      req = { body: { refreshToken: '1234' } };
      res = { json: jest.fn(), status: jest.fn(), sendStatus: jest.fn() };

      userController.tokenRefresh(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(403);
    });
  });
});

describe('Given a logOut function', () => {
  describe('When is invoked', () => {
    test('Then res.send should be called', () => {
      req = { body: jest.fn() };
      res = { send: jest.fn() };
      userController.logOut(req, res);
      expect(res.send).toHaveBeenCalledWith('Logout successful');
    });
  });
});
