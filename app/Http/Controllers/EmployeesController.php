<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Get employee List form database.
    public function getEmployeeList(){
        try{
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    /**
     * Get invidual employee details
     */

    public function getEmployeeDetails(Request $request){
        try{
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    /**
     * Update employee data
     */
    public function updateEmployeeData(Request $request){
        try{
            $employeeId     = $request->get('employeeId');
            $employeeName   = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
                ]);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    // Deleting Employee.

    public function destroy(Employee $employee){
        try{
            $employee->delete();
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    // Storeing new employee.

    public function store(Request $request){
        try{
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::create([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
            
            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
                ]);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

}
