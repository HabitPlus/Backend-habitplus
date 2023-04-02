import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../models/role.enum';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;
  const mockExecutionContext = {
    switchToHttp: () => ({
      getRequest: () => ({
        user: {
          role: [Role.ADMIN],
        },
      }),
    }),
    getHandler: () => {},
    getClass: () => {},
  };

  beforeEach(() => {
    reflector = new Reflector();
    guard = new RolesGuard(reflector);
  });

  it('should allow access for matching role', async () => {
    reflector.getAllAndOverride = jest.fn().mockReturnValue([Role.ADMIN]);
    const result = await guard.canActivate(mockExecutionContext as ExecutionContext);
    expect(result).toBe(true);
  });

  it('should deny access for non-matching role', async () => {
    reflector.getAllAndOverride = jest.fn().mockReturnValue([Role.User]);
    const result = await guard.canActivate(mockExecutionContext as ExecutionContext);
    expect(result).toBe(false);
  });

  it('should allow access for matching roles', async () => {
    reflector.getAllAndOverride = jest.fn().mockReturnValue([Role.ADMIN, Role.User]);
    const result = await guard.canActivate(mockExecutionContext as ExecutionContext);
    expect(result).toBe(true);
  });

  it('should return true if no roles are defined', async () => {
    reflector.getAllAndOverride = jest.fn().mockReturnValue(null);
    const result = await guard.canActivate(mockExecutionContext as ExecutionContext);
    expect(result).toBe(true);
  });
});
