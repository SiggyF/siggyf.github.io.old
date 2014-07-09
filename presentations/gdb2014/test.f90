program test


  real, dimension(2,3) :: a
  real, dimension(2,3) :: b

  a = reshape((/ 2, 3, 4, 5, 0, 2 /), shape(a))
  b = compute(a)

contains
  function compute(a) result(b)
    implicit none
    real, dimension(2,3) :: a
    real, dimension(2,3) :: b
    b = sin(a)

    b(3,4000) = 0
  end function compute


end program test
