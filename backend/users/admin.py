from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "first_name", "last_name", "mobile", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "mobile", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name", "mobile"]
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2','is_staff','is_active'),
        }),
    )

admin.site.register(User, UserAdmin)

from django.contrib import admin
from .models import Package, PackageInclusion, PackageExclusion, DayItinerary

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('id', 'package_name', 'description', 'location', 'season', 'pricing', 'user')
    list_filter = ('location', 'season', 'user')
    search_fields = ('package_name', 'location', 'season')
    readonly_fields = ('id',)

@admin.register(PackageInclusion)
class PackageInclusionAdmin(admin.ModelAdmin):
    list_display = ('id', 'package', 'inclusion')

@admin.register(PackageExclusion)
class PackageExclusionAdmin(admin.ModelAdmin):
    list_display = ('id', 'package', 'exclusion')

@admin.register(DayItinerary)
class DayItineraryAdmin(admin.ModelAdmin):
    list_display = ('id', 'package', 'day', 'description', 'activity')

