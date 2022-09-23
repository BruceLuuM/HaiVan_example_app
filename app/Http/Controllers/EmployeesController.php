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

}
