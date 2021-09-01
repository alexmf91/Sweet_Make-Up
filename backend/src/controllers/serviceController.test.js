const Service = require('../models/serviceModel');
const serviceController = require('./serviceController');

jest.mock('../models/serviceModel');

let req;
let res;

describe('Given a serviceController', () => {
  describe('When getAll function is invoked', () => {
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
    describe('And Service.create resolves', () => {
      test('Then res.json should been called', async () => {
        Service.find.mockResolvedValue({ name: 'MakeUp' });
        await serviceController.getAll(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Service.create rejects', () => {
      test('Then res.status should been called with 500', async () => {
        Service.find.mockRejectedValue();
        await serviceController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        Service.find.mockRejectedValue(new Error('CREATE_ERROR'));
        await serviceController.getAll(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('Given getOneById function', () => {
  beforeEach(() => {
    req = { params: { serviceId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Service.findById resolves', () => {
      test('Then res.json is called', async () => {
        Service.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([])
          })
        });

        await serviceController.getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Service.findById rejects', () => {
      test('Then res.status is called', async () => {
        Service.findById.mockRejectedValue();

        await serviceController.getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Service.findById.mockRejectedValue(new Error('FIND_ERROR'));

        await serviceController.getOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});
