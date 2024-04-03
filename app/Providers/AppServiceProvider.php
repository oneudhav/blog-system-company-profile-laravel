<?php

namespace App\Providers;
use App\Models\PageSetting;
use App\Models\Account;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(['frontend.layout.header','frontend.layout.footer','frontend.layout.topbar'], function($view){
            $setting=PageSetting::first();
            $account=Account::all();
            $view->with([
                'setting'=>$setting,
                'account'=>$account
            ]);
        });
    }
}
