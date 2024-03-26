from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.utils import timezone




from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, matric_number, full_name, department, expected_year_of_graduation, password=None, **extra_fields):
        if not matric_number:
            raise ValueError('The Matric Number field must be set')
        user = self.model(matric_number=matric_number, full_name=full_name, department=department, expected_year_of_graduation=expected_year_of_graduation, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, matric_number, full_name, department, expected_year_of_graduation, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(matric_number, full_name, department, expected_year_of_graduation, password, **extra_fields)

class UserAccount(AbstractBaseUser):
    matric_number = models.CharField(max_length=50, unique=True)
    full_name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    expected_year_of_graduation = models.IntegerField()
    otp = models.IntegerField()
    has_confirm_otp = models.BooleanField(default=False)
    time_otp_sent = models.IntegerField()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'matric_number'
    REQUIRED_FIELDS = ['full_name', 'department', 'expected_year_of_graduation']

    def __str__(self):
        return self.matric_number



class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children')

    def __str__(self):
        return self.name
    

    

class Book(models.Model):
    rate =  models.IntegerField()
    number_of_people_rated = models.IntegerField()
    likes = models.IntegerField()
    unlike = models.IntegerField()
    loved = models.IntegerField()
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    total_pages = models.IntegerField()
    ISBN = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=0)
    image = models.ImageField(upload_to='books/')
    genres = models.ManyToManyField(Genre)
    pdf_file = models.FileField(upload_to='books/pdfs/', null=True, blank=True)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='books', null=True, blank=True)

    def __str__(self):
        return self.title









class Group:
    groups = [
        {'code': '000', 'name': 'Computer Science, Information, & General Works'},
        {'code': '100', 'name': 'Philosophy & Psychology'},
        {'code': '200', 'name': 'Religion'},
        {'code': '300', 'name': 'Social Sciences'},
        {'code': '400', 'name': 'Language'},
        {'code': '500', 'name': 'Science'},
        {'code': '600', 'name': 'Technology'},
        {'code': '700', 'name': 'Arts & Recreation'},
        {'code': '800', 'name': 'Literature'},
        {'code': '900', 'name': 'History & Geography'}
    ]

    def __init__(self, code, name):
        self.code = code
        self.name = name

    def __str__(self):
        return f"Group {self.code}: {self.name}"

    @classmethod
    def create_groups(cls):
        return [cls(group['code'], group['name']) for group in cls.groups]

# Example usage:
groups = Group.create_groups()
for group in groups:
    print(group)



from django.db import models
from django.utils import timezone

class ReservedBook(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    reserved_instances = models.IntegerField(default=0)
    till_date = models.DateTimeField(null=True, blank=True)

    def reserve_book(self):
        if self.book.quantity > 0:
            self.reserved_instances += 1
            self.book.quantity -= 1
            self.book.save()
            self.till_date = timezone.now() + timezone.timedelta(days=5)  # Example: reserved for 5 days
            self.save()

    def cancel_reservation(self):
        if self.reserved_instances > 0:
            self.reserved_instances -= 1
            self.book.quantity += 1
            self.book.save()
            self.till_date = None
            self.save()

    def calculate_fine(self):
        if self.till_date and self.till_date < timezone.now():
            # Calculate the number of days overdue
            days_overdue = (timezone.now() - self.till_date).days
            # Calculate fine
            fine = days_overdue * 0.2  # 0.2 dollar per day
            return fine
        return 0

    def __str__(self):
        return f"{self.book.title} - Reserved Instances: {self.reserved_instances}, Till: {self.till_date}"


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    total_pages = models.IntegerField()
    ISBN = models.CharField(max_length=100)
    description = models.TextField();
    reserved = models.IntegerField();
    borrowed = models.IntegerField();
    quantity = models.IntegerField(default=0)
    image = models.ImageField(upload_to='books/')
    genres = models.ManyToManyField('Genre')
    pdf_file = models.FileField(upload_to='books/pdfs/', null=True, blank=True)

    def __str__(self):
        return self.title

class Borrowing(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    borrow_date = models.DateField(default=timezone.now)
    return_date = models.DateField(null=True, blank=True)
    is_returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} borrowed {self.book.title}"

class ReservedBook(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    reserved_instances = models.IntegerField(default=0)

    def reserve_book(self):
        if self.book.quantity > 0:
            self.reserved_instances += 1
            self.book.quantity -= 1
            self.book.save()
            self.save()

    def cancel_reservation(self):
        if self.reserved_instances > 0:
            self.reserved_instances -= 1
            self.book.quantity += 1
            self.book.save()
            self.save()

    def __str__(self):
        return f"{self.book.title} - Reserved Instances: {self.reserved_instances}"


class PaymentAlert(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    alert_date = models.DateField()
    amount_due = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Payment alert for {self.user.username} for book {self.book.title} due on {self.alert_date}"
