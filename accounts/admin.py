from import_export.admin import ImportExportModelAdmin  #keep it on Top
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from .forms import CustomUserChangeForm, CustomUserCreationForm

# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email','username', 'phone', 'is_staff',]
    fieldsets = UserAdmin.fieldsets + ( (None, { "fields": ('phone', )}),)
    add_fieldsets = UserAdmin.add_fieldsets + ( (None, { "fields": ('phone', )}),)

admin.site.register(CustomUser, CustomUserAdmin)

# class NoticeAdmin(ImportExportModelAdmin):
#     list_display = ['title', 'notice_date', 'upload_on', 'notice_upload',]

# admin.site.register(Notice, NoticeAdmin)