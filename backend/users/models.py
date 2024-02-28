from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager



class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("Last Name"), max_length=50)
    email = models.EmailField(_("Email Address"), max_length=254, unique = True)
    mobile = models.CharField(_("Mobile"), max_length=15, unique=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_blocked = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","last_name","mobile"]


    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self):
        return self.email

    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"


from django.contrib.auth import get_user_model

User = get_user_model()

class Package(models.Model):
    package_name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    image_url = models.URLField()
    season = models.CharField(max_length=50)
    pricing = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Foreign key relationship with User model

    def __str__(self):
        return self.package_name


class PackageInclusion(models.Model):
    package = models.ForeignKey('Package', related_name='inclusions', on_delete=models.CASCADE)
    inclusion = models.CharField(max_length=255)

    def __str__(self):
        return self.inclusion

class PackageExclusion(models.Model):
    package = models.ForeignKey('Package', related_name='exclusions', on_delete=models.CASCADE)
    exclusion = models.CharField(max_length=255)

    def __str__(self):
        return self.exclusion

class DayItinerary(models.Model):
    package = models.ForeignKey('Package', related_name='itinerary', on_delete=models.CASCADE)
    day = models.PositiveIntegerField()
    description = models.TextField()
    image_url = models.URLField()
    activity = models.CharField(max_length=255)

    def __str__(self):
        return f'Day {self.day} - {self.package.package_name}'
