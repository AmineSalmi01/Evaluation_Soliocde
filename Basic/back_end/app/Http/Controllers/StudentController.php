<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::all();
        return response()->json($student);
    }

    public function searchStudent()
    {
        $search_student = Student::where('name','like','%' .$name. '%');
        if($search_student)
        {
            return 'student is here';
        }
        else {
            return 'student is not here';
        }
    }
}
