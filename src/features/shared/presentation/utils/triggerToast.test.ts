import { showToast } from './triggerToast';
import { toast } from 'react-hot-toast';

jest.mock('react-hot-toast', () => ({
  toast: Object.assign(jest.fn(), {
    success: jest.fn(),
    error: jest.fn(),
  }),
}));

describe('showToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls toast.success when type is success', () => {
    showToast('Success message', 'success');
    
    expect(toast.success).toHaveBeenCalledWith('Success message');
    expect(toast.success).toHaveBeenCalledTimes(1);
  });

  it('calls toast.error when type is error', () => {
    showToast('Error message', 'error');
    
    expect(toast.error).toHaveBeenCalledWith('Error message');
    expect(toast.error).toHaveBeenCalledTimes(1);
  });

  it('calls toast when type is default', () => {
    showToast('Default message', 'default');
    
    expect(toast).toHaveBeenCalledWith('Default message');
    expect(toast).toHaveBeenCalledTimes(1);
  });

  it('calls toast when no type is provided', () => {
    showToast('Message without type');
    
    expect(toast).toHaveBeenCalledWith('Message without type');
    expect(toast).toHaveBeenCalledTimes(1);
  });

  it('does not call other toast methods when showing success', () => {
    showToast('Success', 'success');
    
    expect(toast.success).toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
    expect(toast).not.toHaveBeenCalled();
  });

  it('does not call other toast methods when showing error', () => {
    showToast('Error', 'error');
    
    expect(toast.error).toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast).not.toHaveBeenCalled();
  });

  it('handles empty message strings', () => {
    showToast('', 'success');
    
    expect(toast.success).toHaveBeenCalledWith('');
  });
});
