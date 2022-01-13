# Generated by Django 4.0.1 on 2022-01-13 08:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('doctors', '0004_alter_doctor_managers'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='doctor',
            options={'verbose_name': 'user', 'verbose_name_plural': 'users'},
        ),
        migrations.AddField(
            model_name='doctor',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
        migrations.AddField(
            model_name='doctor',
            name='username',
            field=models.TextField(default='', unique=True),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='firstname',
            field=models.TextField(max_length=40),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='gender',
            field=models.TextField(max_length=5),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='lastname',
            field=models.TextField(max_length=40),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='password',
            field=models.TextField(max_length=40),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='qualification',
            field=models.TextField(max_length=40),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='specialization',
            field=models.TextField(max_length=40),
        ),
    ]
