const Booking = require('../models/bookingModel');
const bookingController = require('../controllers/bookingController');

jest.mock('../models/bookingModel');

let req;
let res;
describe('Given a bookingController', () => {
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
    describe('And Booking.create resolves', () => {
      test('Then res.json should been called', async () => {
        Booking.create.mockResolvedValue({ name: 'MakeUp' });
        await bookingController.createOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Booking.create rejects', () => {
      test('Then res.status should been called with 500', async () => {
        Booking.create.mockRejectedValue();
        await bookingController.createOne(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        Booking.create.mockRejectedValue(new Error('CREATE_ERROR'));
        await bookingController.createOne(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('Given a bookingController', () => {
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
    describe('And Booking.create resolves', () => {
      test('Then res.json should been called', async () => {
        Booking.find.mockResolvedValue({ name: 'MakeUp' });
        await bookingController.getAll(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Booking.create rejects', () => {
      test('Then res.status should been called with 500', async () => {
        Booking.find.mockRejectedValue();
        await bookingController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with CREATE_ERROR', async () => {
        Booking.find.mockRejectedValue(new Error('CREATE_ERROR'));
        await bookingController.getAll(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('Given getOneById function', () => {
  beforeEach(() => {
    req = { params: { bookingId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Booking.findById resolves', () => {
      test('Then res.json is called', async () => {
        Booking.findById.mockResolvedValue();

        await bookingController.getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Booking.findById rejects', () => {
      test('Then res.status is called', async () => {
        Booking.findById.mockRejectedValue();

        await bookingController.getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Booking.findById.mockRejectedValue(new Error('FIND_ERROR'));

        await bookingController.getOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given updateOneById function', () => {
  beforeEach(() => {
    req = { params: { bookingId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Booking.findById resolves', () => {
      test('Then res.json is called', async () => {
        Booking.findByIdAndUpdate.mockResolvedValue();

        await bookingController.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Booking.findByIdAndUpdate rejects', () => {
      test('Then res.status is called', async () => {
        Booking.findByIdAndUpdate.mockRejectedValue();

        await bookingController.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Booking.findByIdAndUpdate.mockRejectedValue(new Error('FIND_ERROR'));

        await bookingController.updateOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given deleteOneById function', () => {
  beforeEach(() => {
    req = { params: { bookingId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And Booking.deleteById resolves', () => {
      test('Then res.status is called', async () => {
        Booking.findByIdAndDelete.mockResolvedValue();

        await bookingController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
    });
    describe('And Booking.findByIdAndDelete rejects', () => {
      test('Then res.status is called', async () => {
        Booking.findByIdAndDelete.mockRejectedValue();

        await bookingController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        Booking.findByIdAndDelete.mockRejectedValue(new Error('FIND_ERROR'));

        await bookingController.deleteOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});
